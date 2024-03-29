// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for About documents */
interface AboutDocumentData {
    /**
     * Title field in *About*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Digite aqui!
     * - **API ID Path**: about.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Subtitle field in *About*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Digite aqui!
     * - **API ID Path**: about.subtitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    subtitle: prismicT.KeyTextField;
    /**
     * Simple description field in *About*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Digite aqui!
     * - **API ID Path**: about.simple_description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    simple_description: prismicT.KeyTextField;
    /**
     * Full description field in *About*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Digite aqui!
     * - **API ID Path**: about.full_description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    full_description: prismicT.KeyTextField;
    /**
     * Location field in *About*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Ex: Belém - PA
     * - **API ID Path**: about.location
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    location: prismicT.KeyTextField;
    /**
     * Email field in *About*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Ex: exemplo@com.br
     * - **API ID Path**: about.email
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    email: prismicT.KeyTextField;
    /**
     * Arquivo field in *About*
     *
     * - **Field Type**: Link to Media
     * - **Placeholder**: *None*
     * - **API ID Path**: about.arquivo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    arquivo: prismicT.LinkToMediaField;
}
/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;
/** Content for Banners da Home documents */
interface BannersDaHomeDocumentData {
    /**
     * Banners field in *Banners da Home*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: banners_da_home.banners[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    banners: prismicT.GroupField<Simplify<BannersDaHomeDocumentDataBannersItem>>;
}
/**
 * Item in Banners da Home → Banners
 *
 */
export interface BannersDaHomeDocumentDataBannersItem {
    /**
     * Banner field in *Banners da Home → Banners*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: banners_da_home.banners[].banner
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    banner: prismicT.ImageField<never>;
    /**
     * Link field in *Banners da Home → Banners*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: banners_da_home.banners[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
    /**
     * Descrição field in *Banners da Home → Banners*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: banners_da_home.banners[].descricao
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    descricao: prismicT.KeyTextField;
    /**
     * Sub Descrição field in *Banners da Home → Banners*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: banners_da_home.banners[].sub_descricao
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    sub_descricao: prismicT.KeyTextField;
}
/**
 * Banners da Home document from Prismic
 *
 * - **API ID**: `banners_da_home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BannersDaHomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<BannersDaHomeDocumentData>, "banners_da_home", Lang>;
/** Content for Certificados documents */
interface CertificadosDocumentData {
    /**
     * Certificados field in *Certificados*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: certificados.certificados[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    certificados: prismicT.GroupField<Simplify<CertificadosDocumentDataCertificadosItem>>;
}
/**
 * Item in Certificados → Certificados
 *
 */
export interface CertificadosDocumentDataCertificadosItem {
    /**
     * Imagem field in *Certificados → Certificados*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: certificados.certificados[].imagem
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    imagem: prismicT.ImageField<never>;
}
/**
 * Certificados document from Prismic
 *
 * - **API ID**: `certificados`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CertificadosDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<CertificadosDocumentData>, "certificados", Lang>;
/** Content for Post documents */
interface PostDocumentData {
    /**
     * Thumbnail field in *Post*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: post.thumbnail
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    thumbnail: prismicT.ImageField<never>;
    /**
     * Resumo field in *Post*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: post.resumo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    resumo: prismicT.KeyTextField;
    /**
     * Banner field in *Post*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: post.banner
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    banner: prismicT.ImageField<never>;
    /**
     * Conteúdo field in *Post*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: post.conteudo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    conteudo: prismicT.RichTextField;
    /**
     * Categoria field in *Post*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **API ID Path**: post.categoria
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    categoria: prismicT.SelectField<"Notícia" | "Utilidade" | "Natureza" | "População">;
}
/**
 * Post document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<PostDocumentData>, "post", Lang>;
/** Content for Serviço documents */
interface ServicoDocumentData {
    /**
     * Icon field in *Serviço*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: servico.icon
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    icon: prismicT.ImageField<never>;
    /**
     * Título field in *Serviço*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: servico.titulo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    titulo: prismicT.KeyTextField;
    /**
     * Descrição field in *Serviço*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: servico.descricao
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    descricao: prismicT.RichTextField;
    /**
     * Link para o site field in *Serviço*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Insira o link aqui!
     * - **API ID Path**: servico.link_para_o_site
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    link_para_o_site: prismicT.KeyTextField;
}
/**
 * Serviço document from Prismic
 *
 * - **API ID**: `servico`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ServicoDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<ServicoDocumentData>, "servico", Lang>;
export type AllDocumentTypes = AboutDocument | BannersDaHomeDocument | CertificadosDocument | PostDocument | ServicoDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { AboutDocumentData, AboutDocument, BannersDaHomeDocumentData, BannersDaHomeDocumentDataBannersItem, BannersDaHomeDocument, CertificadosDocumentData, CertificadosDocumentDataCertificadosItem, CertificadosDocument, PostDocumentData, PostDocument, ServicoDocumentData, ServicoDocument, AllDocumentTypes };
    }
}
