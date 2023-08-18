// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
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
/** Content for Clientes documents */
interface ClientesDocumentData {
    /**
     * Lista field in *Clientes*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: clientes.lista[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    lista: prismicT.GroupField<Simplify<ClientesDocumentDataListaItem>>;
}
/**
 * Item in Clientes → Lista
 *
 */
export interface ClientesDocumentDataListaItem {
    /**
     * Logo field in *Clientes → Lista*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: clientes.lista[].logo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
    /**
     * Titulo field in *Clientes → Lista*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: clientes.lista[].titulo
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    titulo: prismicT.KeyTextField;
}
/**
 * Clientes document from Prismic
 *
 * - **API ID**: `clientes`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ClientesDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<ClientesDocumentData>, "clientes", Lang>;
/** Content for Contatos documents */
interface ContatosDocumentData {
    /**
     * Instagram Link field in *Contatos*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contatos.instagram_link
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    instagram_link: prismicT.KeyTextField;
    /**
     * Facebook Link field in *Contatos*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contatos.facebook_link
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    facebook_link: prismicT.KeyTextField;
    /**
     * Twitter Link field in *Contatos*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contatos.twitter_link
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    twitter_link: prismicT.KeyTextField;
    /**
     * Youtube Link field in *Contatos*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contatos.youtube_link
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    youtube_link: prismicT.KeyTextField;
    /**
     * TikTok Link field in *Contatos*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contatos.tiktok_link
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    tiktok_link: prismicT.KeyTextField;
    /**
     * Linkedin Link field in *Contatos*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contatos.linkedin_link
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    linkedin_link: prismicT.KeyTextField;
    /**
     * E-mail Principal field in *Contatos*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contatos.email_principal
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    email_principal: prismicT.KeyTextField;
    /**
     * E-mail Secundário field in *Contatos*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contatos.email_secundario
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    email_secundario: prismicT.KeyTextField;
    /**
     * Telefone Principal field in *Contatos*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contatos.telefone_principal
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    telefone_principal: prismicT.KeyTextField;
    /**
     * Telefone Secundário field in *Contatos*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contatos.telefone_secundario
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    telefone_secundario: prismicT.KeyTextField;
    /**
     * Whatsapp Link field in *Contatos*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contatos.whatsapp_link
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    whatsapp_link: prismicT.KeyTextField;
    /**
     * CNPJ field in *Contatos*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contatos.cnpj
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    cnpj: prismicT.KeyTextField;
    /**
     * Slice Zone field in *Contatos*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: contatos.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<ContatosDocumentDataSlicesSlice>;
}
/**
 * Slice for *Contatos → Slice Zone*
 *
 */
type ContatosDocumentDataSlicesSlice = never;
/**
 * Contatos document from Prismic
 *
 * - **API ID**: `contatos`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContatosDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<ContatosDocumentData>, "contatos", Lang>;
/** Content for Endereços documents */
interface EnderecosDocumentData {
    /**
     * Endereço field in *Endereços*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: enderecos.endereco[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    endereco: prismicT.GroupField<Simplify<EnderecosDocumentDataEnderecoItem>>;
}
/**
 * Item in Endereços → Endereço
 *
 */
export interface EnderecosDocumentDataEnderecoItem {
    /**
     * Nome field in *Endereços → Endereço*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: enderecos.endereco[].nome
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    nome: prismicT.KeyTextField;
    /**
     * Logradouro field in *Endereços → Endereço*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: enderecos.endereco[].logradouro
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    logradouro: prismicT.KeyTextField;
    /**
     * Bairro e Cidade field in *Endereços → Endereço*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: enderecos.endereco[].bairro_e_cidade
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    bairro_e_cidade: prismicT.KeyTextField;
    /**
     * CEP field in *Endereços → Endereço*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: enderecos.endereco[].cep
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    cep: prismicT.KeyTextField;
}
/**
 * Endereços document from Prismic
 *
 * - **API ID**: `enderecos`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type EnderecosDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<EnderecosDocumentData>, "enderecos", Lang>;
/** Content for Equipe documents */
interface EquipeDocumentData {
    /**
     * Lista field in *Equipe*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: equipe.lista[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    lista: prismicT.GroupField<Simplify<EquipeDocumentDataListaItem>>;
}
/**
 * Item in Equipe → Lista
 *
 */
export interface EquipeDocumentDataListaItem {
    /**
     * Foto field in *Equipe → Lista*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: equipe.lista[].foto
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    foto: prismicT.ImageField<never>;
    /**
     * Nome field in *Equipe → Lista*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: equipe.lista[].nome
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    nome: prismicT.KeyTextField;
    /**
     * Cargo field in *Equipe → Lista*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: equipe.lista[].cargo
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    cargo: prismicT.KeyTextField;
}
/**
 * Equipe document from Prismic
 *
 * - **API ID**: `equipe`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type EquipeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<EquipeDocumentData>, "equipe", Lang>;
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
/** Content for Sobre Nós documents */
interface SobreNosDocumentData {
    /**
     * Banner field in *Sobre Nós*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: sobre_nos.banner
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    banner: prismicT.ImageField<never>;
    /**
     * Resumo field in *Sobre Nós*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: sobre_nos.resumo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    resumo: prismicT.KeyTextField;
    /**
     * Conteúdo field in *Sobre Nós*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: sobre_nos.conteudo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    conteudo: prismicT.RichTextField;
    /**
     * Banner_secundario field in *Sobre Nós*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: sobre_nos.banner_secundario
     * - **Tab**: Home
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    banner_secundario: prismicT.ImageField<never>;
    /**
     * Descrição Secundária field in *Sobre Nós*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: sobre_nos.descricao_secundaria
     * - **Tab**: Home
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    descricao_secundaria: prismicT.KeyTextField;
}
/**
 * Sobre Nós document from Prismic
 *
 * - **API ID**: `sobre_nos`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SobreNosDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<SobreNosDocumentData>, "sobre_nos", Lang>;
export type AllDocumentTypes = BannersDaHomeDocument | ClientesDocument | ContatosDocument | EnderecosDocument | EquipeDocument | PostDocument | ServicoDocument | SobreNosDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { BannersDaHomeDocumentData, BannersDaHomeDocumentDataBannersItem, BannersDaHomeDocument, ClientesDocumentData, ClientesDocumentDataListaItem, ClientesDocument, ContatosDocumentData, ContatosDocumentDataSlicesSlice, ContatosDocument, EnderecosDocumentData, EnderecosDocumentDataEnderecoItem, EnderecosDocument, EquipeDocumentData, EquipeDocumentDataListaItem, EquipeDocument, PostDocumentData, PostDocument, ServicoDocumentData, ServicoDocument, SobreNosDocumentData, SobreNosDocument, AllDocumentTypes };
    }
}
