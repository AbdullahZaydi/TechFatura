import React from 'react';
import { Icon, IconProps } from "@chakra-ui/react";

export const RoundedBlob = (props: IconProps) => {
    return (
        <Icon
            width={'100%'}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M66.4,-20.6C75.6,6.8,65.5,41.5,42.3,58.5C19.1,75.4,-17.2,74.5,-40.3,57.2C-63.5,40,-73.5,6.4,-64.6,-20.6C-55.6,-47.6,-27.8,-68.1,0.4,-68.2C28.6,-68.3,57.1,-48.1,66.4,-20.6Z"
                transform="translate(100 100)"
                fill="currentColor"
            />
        </Icon>
    );
};

export const HalfRoundBlob = (props: IconProps) => {
    return (
        <Icon
            width={'100%'}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
              <path fill="currentColor" d="M47.2,-80.1C61.3,-73.6,73,-61.2,79.5,-46.9C86.1,-32.6,87.5,-16.3,87.6,0C87.6,16.4,86.3,32.7,78.9,45.6C71.5,58.5,58.1,67.8,43.9,76C29.7,84.2,14.9,91.1,-0.6,92.1C-16.1,93.2,-32.1,88.3,-46.1,80.1C-60.2,71.8,-72.2,60.2,-80.1,46.3C-88,32.4,-91.7,16.2,-91.4,0.2C-91,-15.9,-86.7,-31.7,-78.4,-44.8C-70,-57.8,-57.6,-68.1,-43.9,-74.8C-30.1,-81.5,-15.1,-84.7,0.7,-86C16.6,-87.2,33.1,-86.6,47.2,-80.1Z" transform="translate(100 100)" />
        </Icon>
    )
}