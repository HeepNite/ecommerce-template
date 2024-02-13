import { ProductSlug, getCategory } from "@/actions"
import { Title } from "@/components"
import { redirect } from "next/navigation"
import { ProductForm } from "./ui/ProductForm"


interface Props {
    params: {
        slug: string
    }
}

export default async function AdminProductPage({ params }: Props) {

    const { slug } = params

    const [product, categories] = await Promise.all([
        ProductSlug(slug),
        getCategory()
    ])

    if (!product && slug !== 'new') {
        redirect('/admin/products')
    }

    return (
        <>
            <Title title={product?.title ?? ''} />
            <ProductForm product={product ?? {}} categories={categories} />
        </>

    );
}