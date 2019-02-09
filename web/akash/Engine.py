from cloudmersive_validate_api_client.rest import ApiException
import numpy as np
import cv2
import cloudmersive_validate_api_client
import cloudmersive_ocr_api_client

class Engine:
    def __init__(self,path,key,scale,pind=1):
        self.key = key
        self.out = cv2.imread(path)
        #self.out = self.Rescale(self.img,scale)
        #self.out = self.Preprocess(self.out,pind)
        cv2.imwrite('img/export/Final.jpg',self.out)
        self.text = self.Image_to_Text('img/export/Final.jpg',self.key)
    def getText(self):
        return self.text
    def Rescale(self,img,scale):
        img2 = cv2.resize(img, None, fx=scale, fy=scale, interpolation=cv2.INTER_CUBIC)
        cv2.imwrite('export/rescaledImg.jpg',img2)
        return img2
    def Preprocess(self,img,pind):
        img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        kernel = np.ones((1, 1), np.uint8)
        img = cv2.dilate(img, kernel, iterations=4)
        img = cv2.erode(img, kernel, iterations=4)
        img = cv2.medianBlur(img,9)
        ret,img2 = cv2.threshold(img,127,255,cv2.THRESH_BINARY)
        img2 = cv2.fastNlMeansDenoising(img2,9)
        return img
    def Image_to_Text(self,img,key):
        api_instance = cloudmersive_ocr_api_client.ImageOcrApi()
        api_instance.api_client.configuration.api_key = {}
        api_instance.api_client.configuration.api_key['Apikey'] = key
        try:
            api_response = api_instance.image_ocr_post(img)
            return api_response
        except ApiException as e:
            print("Exception when calling ImageOcrApi->image_ocr_post: %s\n" % e)
e = Engine("K01.jpg",'c6271a10-de1f-4d71-a725-2f76f042eb24',3,1)
text = e.getText().to_dict()['text_result']
print(text)
