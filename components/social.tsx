import { IconifyIcon } from '@iconify/react/dist/offline';
import githubIcon from '@iconify/icons-fa-brands/github';
import telegramIcon from '@iconify/icons-fa-brands/telegram';
import twitterIcon from '@iconify/icons-fa-brands/twitter';

let icons = new Map<string, IconifyIcon>([
	["github", githubIcon],
	["twitter", twitterIcon],
	["telegram", telegramIcon]
]);

export default function SocialIcon(network: string): IconifyIcon {
	return icons.get(network)!;
}