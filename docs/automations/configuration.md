---
title: Horizon Configuration
description: Discover how to efficiently configure Horizon's automations and access command information through Horizon Settings.
image: https://github.com/atlasfyber/atlas-images/blob/main/horizon-docs.jpg?raw=true
keywords: [configuration, horizon, discordbot, automations, space, astronomy, settings]
sidebar_position: 3
---

# Configuration
Discover how to efficiently configure Horizon's automations and access command information through Horizon Settings.

### What's settings?
The settings command is crucial for customizing Horizon's behavior on your server. This command is likely one you'll use frequently. To get started, simply run the command `/settings` in any channel, if you have permissions to do so. You're the only one who can see this message.

Use the select menu below to choose the category you wish to edit. You can always navigate back using the `Go Back` buttons.

:::info
 `/automations` utilizes device recognition. For more information, refer to our privacy policy. You can disable this feature using the `/preferences` command if desired but it's not recommended.
 :::

### How to customize enabled Automations?
Customizing enabled automations is straightforward using the Horizon interface directly on Discord. Use the command `/settings` and navigate to the automation you wish to edit using the select menu. When you modify a setting, Horizon automatically saves the changes instantly.

:::tip
Buttons and colors of automations can be edited in the Server Settings using the same command. Changes made here will affect all enabled automations in the specific server. To adjust button behavior and customize automation embeds, select the `Server Settings` menu from the `/settings` command. 
:::

:::info
Mobile and computer interfaces for settings vary by device to enhance user-friendliness. 
:::

### What can I customize to each Automation?

**For Articles and Blogs:**
- Edit Tag: Select the Discord tag that identifies which users and roles will receive notifications.
- Edit Channel: Choose the Discord channel where notifications will be sent.
- Edit Message: Customize the content of the notification.
- Edit Filter: Adjust criteria to refine which updates trigger notifications.

**For Reports:**
- Edit Tag: Specify the Discord tag that determines recipients for report notifications.
- Edit Channel: Select the channel for report notifications.
- Edit Message: Tailor the content of the report notification.

**For Next Launches:**
- Edit Tag: Assign a Discord tag to specify users and roles for notifications.
- Edit Channel: Specify where notifications for upcoming events will be sent.
- Edit Message: Customize the notification content.
- Edit Filter: Define conditions for when notifications are triggered.
- Edit Timer of the notification: Set the timing for when notifications are sent.

**For Next Events:**
- Edit Tag: Choose a Discord tag to determine recipients for event notifications.
- Edit Channel: Determine the Discord channel for event notifications.
- Edit Message: Customize the content of event notifications.
- Edit Timer of the notification: Adjust the timing for sending event notifications.

:::note
Each type of automation allows you to personalize the notification messages by selecting specific Discord tags that dynamically update based on the event or content being notified, specifying which users and roles receive the notifications.
:::

## What else can you do with /settings?

**You can configure Horizon's appearance on your server, including:**
- Manage Automation Buttons
- Manage Commands Permissions *
- Manage Embed & Automation Colors
- Manage Interactions
- Review Statistics
- Leave Feedback
- Review Your Horizon Badges

:::warning
Currently, Horizon Permissions Manager does not support granting access to specific roles for specific commands. This limitation is intentional to maintain simplicity for the average user and ensure a well-structured system. However, this functionality may be considered for future updates.
:::
