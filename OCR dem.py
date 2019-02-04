import cv2
import pytesseract 
import time
start = time.time()
config = '--tessdata-dir H:/Anaconda/Library/bin'
img2 = RescaleC('G:\\Something Like Program\\Projects Sem 6\\Camcode\\export2.jpg',4)
img2 = Preprocess(img2)
text = pytesseract.image_to_string(img2, config=config)
cv2.imshow('image',img2)
print(text)
end = time.time()
print("Time = ",end-start)
