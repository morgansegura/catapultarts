import CMS from 'netlify-cms'

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import HomePagePreview from "./preview-templates/HomePagePreview";
import FooterPreview from "./preview-templates/FooterPreview";
import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewTemplate("footer", FooterPreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview)