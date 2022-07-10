#!/bin/bash
cd /home/ubuntu/bmms-aws-react-lecture/server
pm2 stop all
pm2 start index.js