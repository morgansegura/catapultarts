import CMS from 'netlify-cms'
import * as ColorWidget from "netlify-cms-widget-color";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import HomePagePreview from "./preview-templates/HomePagePreview";
import FooterPreview from "./preview-templates/FooterPreview";
import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewTemplate("footer", FooterPreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerWidget("color", ColorWidget.Control);