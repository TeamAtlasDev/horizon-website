---
id: privacy
title: Privacy Policy
description: Discover how we handle your information with our Privacy Policy for Horizon by Atlas.
wrapperClassName: legal-page-wrapper
---

# Privacy Policy

:::info 🛡️ TL;DR for the Non-Nerds
**Your data is safe with us.** We only collect the bare minimum data required to make Horizon function (like server IDs, configuration preferences, and command usage). We **never** sell your data, we **never** read your personal messages, and we don't track you across the web. You can request to have your data deleted at any time.
:::

This is our "Privacy Policy" which sets out the policy governing our use of information you provide in connection with the Horizon Application by Atlas ("Application"). The terms "you" and "your" refer to all individuals or entities using the Application. The terms "we," "us," "our," refer to Atlas and "Application" refers to our Horizon Application itself.

We may update this Privacy Policy from time to time. Changes in our Privacy Policy will be effective immediately. By using our Application, you consent to the collection, use, and transfer of your information in accordance with this Privacy Policy. If you do not agree to this Privacy Policy, please do not use our Application.

## Privacy Statement

We respect the privacy of your information. We provide this explanation about our information practices as a demonstration of our commitment to protecting your privacy. This policy describes the types of information we may collect from you or that you may provide when using the Horizon Application and our practices for collecting, using, maintaining, protecting, and disclosing that information.

This policy applies to information we collect:
- When you interact directly with the Application by executing slash commands or clicking interactive buttons.
- When you set up or edit automated notifications and preferences for your server.
- When the Application detects the device (computer, mobile) you are logged into for providing the corresponding interface for certain commands.

It does not apply to information collected by:
- Us offline or through any other means, including on any other website operated by Atlas or any third party.
- Any third party, including through any application or content (including advertising) that may link to or be accessible from or on the Application.

## What Data We Save

To make Horizon function seamlessly and provide automated space news, we only collect the data strictly necessary for our operations:

- **Server Configuration Data:** We store Discord Server IDs (Guild IDs), Channel IDs, selected Role IDs (for pinging), and preferred server settings (configured via the `/settings` command) to deliver and format automated space news correctly.
- **Message Tracking:** We temporarily store the Message IDs of the automated embeds we send, allowing the bot to edit its own messages when a space event or launch status updates.
- **Temporary Session Caching:** When a user interacts with a command, we temporarily cache their Discord User ID in memory for up to 15 minutes to ensure interactive buttons work correctly.
- **Click Tracking & Link Redirects:** When users click "Read More" or "Live Stream" links on our embeds, our redirect system logs the source Server ID (Guild ID) and broad geographical data (such as your country or region) to calculate aggregated popularity and demographic statistics. **We do not track which specific Discord user clicked the link.** While we process IP addresses temporarily to determine your country for these analytics, the raw IP addresses are not permanently stored or linked to your personal Discord identity.
- **Global Anonymized Stats:** We collect anonymous, aggregated statistics to monitor bot performance and generate community stats (like "Horizon Wrapped"). **No individual user data is tied to these metrics.**
- **No Personal Chat Logging:** **To respect your server's privacy, the bot does NOT log, record, or store the contents of personal user messages, server chat history, or media.** Horizon only listens for its specific Slash Commands and Button interactions.

## Data Retention & Deletion Policies

We are committed to ensuring your data is handled responsibly and have clear automated processes for data removal:

- **7-Day Grace Period:** If Horizon is removed from a server, we do not delete the server's data immediately in case it was an accidental kick. Instead, all data is marked for "pending deletion" with a 7-day countdown.
- **Total Deletion:** If the bot is not re-invited within exactly 7 days, a background cleanup script permanently and completely purges all data associated with that server, including configuration settings, channel preferences, and server-specific statistics.
- **Cancellation of Deletion:** If Horizon rejoins the server before the 7-day grace period expires, the deletion process is automatically canceled, and all data remains intact.
- **Global Anonymized Stats:** Horizon retains a minimal package of global, fully anonymized metrics (e.g., total global messages sent, overall latency) across all servers strictly to monitor system health and improve performance.
- **Manual Deletion:** Server administrators can manually wipe their server's configuration data at any time using the `/settings` command, or by contacting our support.

## Third-Party Websites

The Application or messages distributed by our Application may contain links to third-party websites (e.g., NASA, YouTube, SpaceDevs). These linked websites are not under our control, and we are not responsible for the privacy practices or the contents of any such linked website. If you provide any personal data through any such third-party website, your transaction will occur on the third party’s website, and the personal data you provide will be collected by and controlled by the privacy policy of that third party. 

## Contact Us

By using the Application, you acknowledge that you have read, understood, and agreed to be bound by this Privacy Policy. If you do not agree with any part of these terms, please do not use the Application. 

Atlas is not a registered company but a team of individuals and developers of Horizon, owning the domains teamatlas.dev and horizonbot.xyz. We are not associated with any registered entity under the name "Atlas." Any use of our services is subject to our Terms of Service & Privacy Policy. For any questions, data deletion requests, or concerns, please contact us via Discord or email us at <a href="#" onClick={(e) => { e.preventDefault(); const b = atob("aW5mb0B0ZWFtYXRsYXMuZGV2"); setTimeout(() => { window.location.href = "mailto:" + b; }, Math.floor(Math.random() * 300) + 100); }}>info [at] teamatlas.dev</a>.