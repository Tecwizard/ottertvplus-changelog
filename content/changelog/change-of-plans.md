---
title: Change of Plans...
date: 2025-11-24T12:00:00.000-04:00
excerpt: Unfortunetly things didn't work out as I hoped. The server is now completly full and adding another drive wasn't as trivial as I had hoped... 
tags:
  - Update
image: https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWJrMjhrdWM5NGJ6b3N5YTh1bTQ3Mnk3ODRveGY4d2Jma2poeDZjcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8vIFoKU8s4m4CBqCao/giphy.gif
---
![GIF of CJ From San Andreas Going "Aw shit, here we go again."](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWJrMjhrdWM5NGJ6b3N5YTh1bTQ3Mnk3ODRveGY4d2Jma2poeDZjcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8vIFoKU8s4m4CBqCao/giphy.gif)

## Well that didn't go acording to plan...

During the uploading of The Legend of Kora I ran into a wall. More specifically an error I could not easily solve: `"Unable to Complete Upload, No More Space on Disk"`

That's right, the ZFS configuration left only 4TB of usable space on the server and I had used up the remaining free space. "Well that's no problem, just slap another drive in there" you might say. Unfortunetly it's not as simple as that.

I learned the hard way that to add a new drive to an existing ZFS pool, you have to rebuild the pool. Which means wiping all the disks and starting over. So much for ease of use.

So for now I have decided, since I have to reformat the drives anyways, to forgoe redundancy and I will be converting the 3 drives back into seperate partitions and using a MergerFS to make it look like a single drive to Linux. I will also be adding a fourth drive to give me a total of 8TB of disk space to work with.

In the future I plan on purchasing larger drives and putting them in RAID configuration again for redundancy but for now this setup will do. The server will be offline during this transition which could take a few days as I have to move over all the media from my backup NAS and ditribute them manually across all four drives as MergerFS does not do that on it's own reliably.

Also I'll be keeping the 512GB SSD I was using for cache installed as general storage rather than removing it.