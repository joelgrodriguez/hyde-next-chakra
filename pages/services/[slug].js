import PostLayout from '@layouts/post'
import { getPageBySlug, getAllPages } from "@api"
import DefaultLayout from '@layouts/default'

export default function Post(props){
    return (
        <PostLayout>Services Slug</PostLayout>
    )
}

export async function getStaticProps(context){
    return {
        props: await getPageBySlug(context.params.slug)
    }
}

export async function getStaticPaths(){
    let paths = await getAllPages()
    paths = paths.map(page => ({
        params: { slug:page.slug }
    }));
    return {
        paths: paths,
        fallback: false
    }
}