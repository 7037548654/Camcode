import cv2
import numpy
def RescaleC( imgpath , scale ):
    img = cv2.imread(imgpath, cv2.IMREAD_COLOR)
    img2 = cv2.resize(img, None, fx=scale, fy=scale, interpolation=cv2.INTER_CUBIC)
    cv2.imwrite('export1.jpg',img2)
    return img2