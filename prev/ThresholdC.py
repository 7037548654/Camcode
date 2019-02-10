import cv2
import numpy as np
import time

img = cv2.imread('G:\\Something Like Program\\Projects Sem 6\\Camcode\\img\\K011.bmp',cv2.IMREAD_GRAYSCALE)

#img2 = cv2.adaptiveThreshold(img,255,cv2.ADAPTIVE_THRESH_GAUSSIAN_C,cv2.THRESH_BINARY,1001,1001)
img = cv2.medianBlur(img,9)
ret,img2 = cv2.threshold(img,127,255,cv2.THRESH_BINARY)
img2 = cv2.fastNlMeansDenoising(img2,1)
cv2.imshow('img',img2)
cv2.imwrite('export2.jpg',img2)