/**
 * Font awesome wrapper
 * Search icons in https://fontawesome.com/icons
 */

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

library.add(fas);

const Icon = (props: { id: string }) => <FontAwesomeIcon icon={props.id as any} style={{ color: 'inherit' }} />;

export default Icon;
