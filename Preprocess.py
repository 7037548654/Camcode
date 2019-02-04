import cv2
import numpy as np
    # Convert to gray
def Preprocess(img):
    #img = cv2.imread('G:\\Something Like Program\\Projects Sem 6\\Camcode\\img\\Knapsack01.jpg', cv2.IMREAD_COLOR)
    #img = cv2.resize(img,(1300,900))
    #cv2.imshow('Original',img)
        # Applying Grayscale
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    #cv2.imshow('After Gray',img)
        # Apply dilation and erosion to remove some noise
    kernel = np.ones((1, 1), np.uint8)
    img = cv2.dilate(img, kernel, iterations=1)
    #cv2.imshow('After Dilation',img)
    img = cv2.erode(img, kernel, iterations=1)
    #cv2.imshow('After Erosion',img)
        # Apply blur to smooth out the edges
    img = cv2.GaussianBlur(img, (5, 5), 0)
    #cv2.imshow('After blur',img)
    return img