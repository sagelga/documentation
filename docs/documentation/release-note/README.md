# Release Note
## 2022-01-20
- Migrate website to VuePress 2 (beta)
- Change the website font to Anuphan for Thai language
  - We still use IBM Plex Sans for English and IBM Plex Mono for codeblocks
- Update the configuration file
- Offload the sitebar and navbar into individual component
## 2022-01-xx
- Fully using CloudFlare to make the website load faster
  - Also enabling Rocket Loader for faster page loading time
## 2021-03-20
- <Badge text="New" type="tip"/> Create documentation for Documentation repo
  - Kinda trippy isn't it?
  - Documentation is filled with configurations and customizations. So it is a good idea to document it.
  - Developers that are using my documentation will benefits from this.
- <Badge text="New" type="tip"/> Add requirement information of Project Panda
## 2021-03-19
- <Badge text="New" type="tip"/> Auto-sidebar functions
  - This comes with some change to `config.js` that we change from creating our own sidebar children to automatically crawls.
  - The `config.js` is now cleaner and contents are automatically scanned
- <Badge text="Improvement" type="warning"/> Navigation bar to another file
  - This makes sure that Navigation bar will not collide with sidebar.
