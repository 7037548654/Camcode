from __future__ import print_function
import time
import cloudmersive_validate_api_client
from cloudmersive_validate_api_client.rest import ApiException
from pprint import pprint
import cloudmersive_ocr_api_client

api_instance = cloudmersive_ocr_api_client.ImageOcrApi()
image_file = 'G:\\Something Like Program\\Projects Sem 6\\Camcode\\export2.jpg' # file | Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

print('Enter Cloudmersive Key : ')
key = input()
api_instance.api_client.configuration.api_key = {}
api_instance.api_client.configuration.api_key['Apikey'] = key
try:
    # Converts an uploaded image in common formats such as JPEG, PNG into text via Optical Character Recognition.
    api_response = api_instance.image_ocr_post(image_file)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ImageOcrApi->image_ocr_post: %s\n" % e)