import { IconifyIcon } from '@iconify/react';
import githubIcon from '@iconify/icons-fa-brands/github';
import telegramIcon from '@iconify/icons-fa-brands/telegram';
import twitterIcon from '@iconify/icons-fa-brands/twitter';

let icons = new Map<string, any>([
	["github", githubIcon],
	["twitter", twitterIcon],
	["telegram", telegramIcon]
]);

export default function SocialIcon(network: string): IconifyIcon {
	return icons.get(network);
}