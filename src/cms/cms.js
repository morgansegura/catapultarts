import CMS from 'netlify-cms'

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import HomePagePreview from "./preview-templates/HomePagePreview";
import FooterPreview from "./preview-templates/FooterPreview";
import NavbarPreview from "./preview-templates/NavbarPreview";
import BlogPostPreview from './preview-templates/BlogPostPreview'
import PageCustomPreview from './preview-templates/PageCustomPreview'

CMS.registerPreviewTemplate("footer", FooterPreview);
CMS.registerPreviewTemplate("navbar", NavbarPreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('page', PageCustomPreview)