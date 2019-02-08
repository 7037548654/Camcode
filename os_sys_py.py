import os.path
import subprocess
from subprocess import STDOUT,PIPE

def compile_java(java_file):
    try:
        subprocess.check_call(['javac', java_file])
    except subprocess.CalledProcessError as e:
        print(e)

def execute_java(java_file, stdin):
    java_class,ext = os.path.splitext(java_file)
    cmd = ['java', java_class]
    proc = subprocess.Popen(cmd, stdin=PIPE, stdout=PIPE, stderr=STDOUT)
    stdout,stderr = proc.communicate(stdin)
    out_list = [i.decode("utf-8") for i in stdout.rsplit()]
    print(out_list)
        
compile_java('ABC.java')
execute_java('ABC.java',[])


