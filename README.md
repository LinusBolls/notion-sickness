# Notion Sickness

## Summary

Upon visiting a notion page, a button "Download Database" button appears in the left menu bar if the current page is displaying a database.
Pressing this button will start the scraping process, after which the rows of the database will be available to download in .csv format.


## Setup

### Firefox: 

0. navigate to ```about:debugging#/runtime/this-firefox``` inside firefox
1. click ```Load Temporary Add-on...```
2. select ```notion-sickness/manifest.json``` in the appearing file explorer

### Chrome: 

0. navigate to ```chrome://extensions/``` inside chrome
1. toggle ```Developer mode``` in the top right corner if not already enabled
2. click ```Load unpacked``` in the resulting top bar
3. select ```notion-sickness``` in the appearing file explorer

## Todos

- the user and space credentials are still hardcoded, only allowing downloads in the CODE Wiki Notion space as Linus Bolls
- the "Download Database" button disappears on route changes