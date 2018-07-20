# free-software-habits

<img align="right" width="179" alt="screen shot 2018-07-20 at 18 21 10" src="https://user-images.githubusercontent.com/3740101/43016720-a554f9b8-8c4b-11e8-8971-197518a8eea7.png">


This repo contains a proof-of-concept for a firefox extension, that hints the user of free software alternatives to existing closed source software. The goal as described by GSoC project proposal by [Daniel Pocock](https://danielpocock.com/gsoc-project-beating-cambridge-analytica-at-their-own-game) for the 2018 edition, under Debian's umbrella, is to create more awareness of existing open-source software, highlight alternatives that otherwise wouldn't be known by the user, and change habits into using open-source.


## Project management

For the managment of the project, we are using a kanban board, hosted on [storm.debian.net](https://storm.debian.net), with weekly reviews of the tasks, create new tasks and closing existing ones.

<img width="1408" alt="kanban project" src="https://user-images.githubusercontent.com/3740101/43017215-37654dca-8c4d-11e8-87b4-d208f988b40e.png">

We're also using github to create new issues based on the tasks, that can divided in smaller chunks given the complexity of the goal. Gitflow was adopted where feature branchs are created and reviewed (PR) by a peer before merged into master.

## Contribute

Code contributions are welcome! Please commit any pull requests against the `master` branch. Learn more about how to contribute by reading the [Github Flow guide](https://guides.github.com/introduction/flow/).

### Debug the extension

- Clone the repo: 
  1. ```git clone https://github.com/Enkelena/free-software-habits.git```
- Open Firefox:
  1. Type `about:debugging` in your address bar to bring up the add-ons page.
  2. Click the `Load Temporary Add-on` button, navigate to the `build/manifest.json` file, and "Open".

## Reach out

I'm available either on irc.debian.org (#debian-outreach, nickanme: EnkelenaH) or through the contacts available on the debian wiki.

## List of software alternatives

Currently, the list of recommended software is being hosted on github in a [JSON formatted file](https://github.com/Enkelena/free-software-habits/blob/master/alternativeApps.json). The extension downloads the file from github and filters the list to show the user the specific alternatives to the currrently visited app. In the roadmap is the creation of a server + API that will allow the extension to make a call and receive the list of alternative apps.

### Useful links:

[Debian's SummerOfCode2018 Project page]( https://wiki.debian.org/SummerOfCode2018/Projects/FirefoxAndThunderbirdPluginFreeSoftwareHabitsDetails)

[Documentation](https://enkelena.github.io/free-software-habits/)

[Kanban board (read-only)](https://storm.debian.net/shared/pNYyAAjAgoMbwcaTqQTeJhFWfAx0pNsa1D9IeXJpzAD)
