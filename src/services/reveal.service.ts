import Reveal from 'reveal.js';
import ZoomPlugin from 'reveal.js/plugin/zoom/zoom';

export class RevealService {
    public start(): void {
        const deck = new Reveal();

        // @ts-ignore
        deck.addKeyBinding('37', 'navigateLeft');
        // @ts-ignore
        deck.addKeyBinding('39', 'navigateRight');

        deck.initialize({
            controlsLayout: 'edges',
            hashOneBasedIndex: true,
            hash: true,
            rtl: true,
            display: 'grid',
            hideCursorTime: 1000,
            plugins: [ZoomPlugin],
            margin: 0,
        });
    }
}
