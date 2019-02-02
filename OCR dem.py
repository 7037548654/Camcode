import cv2
import pytesseract 
config = '--tessdata-dir H:/Anaconda/Library/bin'
im = cv2.imread('G:\\Something Like Program\\Projects Sem 6\\Camcode\\img\\Knapsack01.jpg', cv2.IMREAD_COLOR)
text = pytesseract.image_to_string(im, config=config)
print(text)