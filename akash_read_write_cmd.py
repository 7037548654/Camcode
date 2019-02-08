# -*- coding: utf-8 -*-
"""
Created on Mon Feb  4 22:05:47 2019

@author: akash_chhetri
"""
import os.path
import subprocess
from subprocess import STDOUT,PIPE

def compile_java(java_file):
    subprocess.check_call(['javac', java_file])

def execute_java(java_file, stdin):
    java_class,ext = os.path.splitext(java_file)
    cmd = ['java', java_class]
    proc = subprocess.Popen(cmd, stdin=PIPE, stdout=PIPE, stderr=STDOUT)
    stdout,stderr = proc.communicate(stdin)
    print ('This was "' + stdout + '"')

compile_java('ABC.java')
execute_java('ABC', 'Jon')



#import subprocess
#
#subprocess.call('ls', shell =True)

#from subprocess import check_output
#check_output("dir C:", shell=True)