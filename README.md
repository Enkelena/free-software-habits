# free-software-habits

This repo contains a proof-of-concept for a firefox extension, that hints the user of free software alternatives when a website is visted. The goal as described by GSoC project proposal by [Daniel Pocock](https://danielpocock.com/gsoc-project-beating-cambridge-analytica-at-their-own-game) for the 2018 edition, under Debian's umbrella, is to create more awareness of existing open-source software, highlight alternatives that otherwise wouldn't be known by the user, and change habits into using open-source.

### Useful links:
[Debian's SummerOfCode2018 Project page]( https://wiki.debian.org/SummerOfCode2018/Projects/FirefoxAndThunderbirdPluginFreeSoftwareHabitsDetails)

[Enkelena's Project page on Debian wiki]https://wiki.debian.org/Add%20alternatives%20for%20apps%20on%20Internet

add: to your page on wiki.debian: add roadmap, links to the kanban and this general information like intro, etc

[GSoC Project Proposal](https://summerofcode.withgoogle.com/projects/#5851157331705856)

## Project management

For the managment of the project, we are using a kanban board, hosted on storm.debian.net, with weekly reviews of the tasks, create new tasks and closing existing ones.

add: screenshot of kanban

We're also using github to create new issues based on the tasks, that can divided in smaller chunks gieven the complexity of the goal. Gitflow was adopted with feature branch being created, and pull requests reviewed by a peer before merged into master.

## How to contribute

Clone the repo: ```git clone https://github.com/Enkelena/free-software-habits.git```

## Reach out

Contact me on irc.debian.org (#debian-outreach), nickanme: EnkelenaH.
Contribute to the project code, by opening an issue on github, or a pull-request with a code fix.

## List of software alternatives

Currently, the list of recommended software is being hosted on github in a [JSON formatted file](https://github.com/Enkelena/free-software-habits/blob/master/alternativeApps.json). The extension downloads the file from github and filters the list to show the user the specific alternatives to the currrently visited app. In the roadmap is the creation of a server + API that will allow the extension to make a call and receive the list of alternative apps.
