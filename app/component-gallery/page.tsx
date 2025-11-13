import ComponentGalleryClient from './ComponentGalleryClient';
import { getAppSession } from '@/lib/auth';
import { loadTexts } from '../locale';

export default async function ComponentGalleryPage() {
    const session = await getAppSession();
    const texts = await loadTexts(session?.user?.locale);

    return <ComponentGalleryClient copy={texts.componentGallery} />;
}
