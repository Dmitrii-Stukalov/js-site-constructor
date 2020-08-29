import image from './assets/image.jpg'
import {ImageBlock, TextBlock, TextColumnsBlock, TitleBlock} from "./classes/blocks"
import {css} from "./utils";

export const model = [
    new TitleBlock(
        'Site Constructor in pure JavaScript',
        {
            tag: 'h1',
            styles: css({
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                padding: '1.5rem',
                'text-align': 'center'
            })
        }
    ),
    new TextColumnsBlock(
        [
            'Without using libraries',
            'Created within Vladilien Minin course',
        ],
        {
            styles: 'padding: 2rem 0; background: linear-gradient(to bottom, #8e2de2, #4a00e0); font-weight:bold; text-align: center;'
        }
    ),
    new TextBlock(
        'Thanks to my friend Nikita who bring me to webdev',
        {
            styles: 'background: linear-gradient(to left, #f2994a, #f2c94c); padding: 1rem;'
        }
    ),
    new ImageBlock(
        image,
        {
            styles: 'padding: 2rem 0; display: flex; justify-content: center',
            alt: 'mountain',
            imageStyles: 'width: 500px; height: auto;'
        }
    )
]