import { trigger, state, style, transition, animate } from '@angular/animations';

export const slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateX(-100px)', opacity: 0 }),
        animate('0.3s ease-in')
    ]),
    transition(':leave', [
        animate('0.5s ease-out', style({ transform: 'translateX(100%)', opacity: 0 }))
    ])
]);

export const fade = trigger('fade', [
    state('void', style({ opacity: 0, transition: 'translateX(-100%)' })),

    transition(':enter, :leave', [
        animate(500)
    ])
]);

export const expandH = trigger('expandH', [
    state('void', style({ height: '0px', opacity: 0 })),
    transition(':enter, :leave', [
        animate(200)
    ])
]);

export const flip = trigger('flip', [
    state('selected', style(
        {}
    )),
    state('deselected', style({})),
    transition('deselected => selected', [
        style({ transform: 'rotateY(180deg)' }),
        animate('300ms ease-out')
    ]),
    transition('selected => deselected', [
        style({ transform: 'rotateY(180deg)' }),
        animate('300ms ease-out')
    ])
]);
