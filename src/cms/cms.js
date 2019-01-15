import CMS from 'netlify-cms'
import * as ColorWidget from "netlify-cms-widget-color";

import HomePagePreview from "./preview-templates/HomePagePreview";
import BlogPostPreview from './preview-templates/BlogPostPreview'
import CustomPagePreview from './preview-templates/CustomPagePreview'
import DocumentationPreview from './preview-templates/DocumentationPreview'

CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('custom-pages', CustomPagePreview)
CMS.registerPreviewTemplate('docs-post', DocumentationPreview)

CMS.registerWidget("color", ColorWidget.Control);