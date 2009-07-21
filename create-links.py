#!/usr/bin/env python

import sys
import os

def error(message):
    print message
    sys.exit()

if len(sys.argv) <= 1:
    print "usage: %s path-to-WebKit" % sys.argv[0]
    error("creates links to WebKit directories to allow mock-wi to work")

baseDir = sys.argv[1]
if not os.path.exists(baseDir): error("directory does not exist: %s" % baseDir)

paths = (
    ("English.lproj", os.path.join(baseDir, "WebCore/English.lproj")),
    ("front-end",     os.path.join(baseDir, "WebCore/inspector/front-end")),
)

for path in paths:
    (lpath, apath) = path
    
    if     os.path.exists(lpath): error("directory already exists: %s" % lpath)
    if not os.path.exists(apath): error("directory does not exist: %s" % apath)
    
for path in paths:
    (lpath, apath) = path

    os.symlink(apath, lpath)

    print "ln -s %s %s" % (apath, lpath)