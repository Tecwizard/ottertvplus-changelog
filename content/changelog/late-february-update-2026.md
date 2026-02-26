---
title: End of Month Update (February)
date: 2026-02-26T12:00:00.000-04:00
excerpt: While there isn't much updates to report, the month of February was not uneventful either. Let's just say there was an incident last week... 
tags:
  - Update
image: /uploads/this-is-fine.jpg
---

![A dog sitting inside a buning kitchen with the caption "This is fine"](uploads/this-is-fine.gif)

### It almost went up in smoke...almost...

Well that's a bit of an exageration but we did have a critical incident over the weekend that took the server offline for a few days.

First, since this post will be a bit long detailing the incident, I will list the movies that are now available for your enjoyment:
* Five Nights at Freddy's 2
* Now You See Me, Now You Don't

Now, let me start by saying the server is fine and was not the issue. It only went offline because it needed to be moved to a temporary location *~~(the floor)~~* while the rack it was mounted in was dissasembled. 

Friday night, after I had gotten home, I had noticed an odd sulfur smell which was strongest in my office, where all the server equipment lives. Since a window A/C *(the central A/C went out last month)* had been running all day I at first assumed the smell was coming from it. To me it smelled like something was burning and I was worried the motor of this refurbished unit was going out. However shutting off the unit and opening the windows did not help. Someone else, who has a much better sense of smell than I do, quickly pointed out that the smell was coming from my server rack. I found this odd as none of the servers were reporting an overhead condition and were all idling at the time. Upon closer inspection I soon found the source of the smell, an overheating UPS Battery Pack.

All my server equipment is powered by a CyberPower 1500 W Rackmount UPS (specifically the PR1500LCDRTXL2U) and 4 battery extention modules (specifically the BP48V75ART2U). Of course I obtained these second hand from a working environment. The plan was to run the units as is and then gradually replace the batteries inside one unit at a time over the course of two years. I replaced the batteries from one unit as those batteries had failed at some point prior to when I received them. I should note that these units use 12V 9AH SLA battiers, eight of them per unit (4 per pack) with exception to the main unit which only has 4 batteries (one pack). At the time the batteries cost $160 but I was able to get them for $95 using discounts and coupons. However when time came for the next unit battery swap the price of the batteries had jumped to $230 and I did not have the finances to afford that so I had made the decision to hold out and wait for the prices to drop.

...Then I kiiiinda forgot about it...

![Apollo Justice smiling nervously](/uploads/ace-attorney-apollo-justice.gif)

Yeah... So fast forward to last week when one of the battery packs decided to go thermonuclear. The chemicals in the battery broke down and began a runaway reaction. It's believed the reaction started overnight as there was no noticable smell the day before. This reaction caused the batteries to expand and break the seal on their plastic shells. Once I figured out the batteries were in a runaway reaction I quickly shut off equipment and transfered servers with dual power supplies to mains power. Of course with my luck the affected battery module was at the bottom of the rack, and since these did not come with rails, I had to remove everything above it to remove it and take it outside. Then I spent the next hour, quite literally, hammering the hot, leaking and swollen batteries out of the chasis. Luckily it was just one pack and not both.

The next day I hammered the case back to being square (the batteries and the removal attempt warped the case) and then I set up the Jellyfin server in it's temporary spot. "Now what?" you may ask. Well for right now everything is running directly off wall power. Not ideal but it works for now. I decided not to run the UPS due to the fact the batteries (despite the ones I replaced last year) were all manufactured at the same time and well past their rated lifespand. So what's the plan?

* Replace the batteries in 2 units and the main unit, replace the batteries of the last unit at a future date (20 SLA batteries were about $400, I couldn't afford another 8)
* Figure out how to incorperate temperature sensors so I can create alerts when a battery pack overheats
* Aquire or make server rails so that I can work on the rack easier if I have to pull a module out in the future

For now the new batteries are on order awaiting delivery from FedEx. I'm hoping they arrive this weekend so I can get the rack back together and everything back on UPS Power.

![A GIF Terry Crews crossing his fingers from America's Got Tallent](/uploads/terry-crews-fingers-crossed.gif)