# Start from a working MagicMirror image 
FROM karsten13/magicmirror 
WORKDIR /opt/magic_mirror

COPY ./config ./config
# COPY ./modules ./modules