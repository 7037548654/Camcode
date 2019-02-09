import sys
key=sys.argv[1]
if key!='':
    f=open("keyfile.txt","w+")
    f.write(key)
f.close()
sys.stdout.flush()
    


    
