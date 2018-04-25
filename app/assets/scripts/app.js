import '../../temp/scripts/modernizr'; // test browser for support of different features
import 'picturefill'; // A responsive image polyfill

import ProjectContent from './modules/ProjectContent';
import FullHeightHeader from './modules/FullHeightHeader';
import FixedHeader from './modules/FixedHeader';
import FadeInBackground from './modules/FadeInBackground';

const projectContent = new ProjectContent();
const fullHeightHeader = new FullHeightHeader();
const fixedHeader = new FixedHeader();
const fadeInBackground = new FadeInBackground();