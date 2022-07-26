import React, { useState } from "react";


export default function CadastroMensagem() {
    const [titulo, setTitulo] = useState("");
    const [preço, setPreço] = useState("");
    const [descricao, setDescricao] = useState("");
    const [imagem, setImagem] = useState("");
    const [categoria, setCategoria] = useState("");

    function salvarProduto() {
        api.post('https://fakestoreapi.com/products', {
            body: JSON.stringify(
                {
                    title: titulo,
                    price: preço,
                    description: descricao,
                    image: imagem,
                    category: categoria
                }
            )
        })
            .then(res => res.json())
            .then(json => console.log(json))

        return (
            <div class="container mt-5">
                <h1 style={{ textAlign: "center", color: "#2771c1" }}>
                    Cadastro Mensagem
                </h1>
                <form class="row g-3">
                    <div class="col-md-12">
                        <label for="Resumo_Mensagem" class="form-label">
                            <h6 style={{ color: "#2771c1" }}>
                                titulo
                            </h6>
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Espaço Obrigatório"
                            maxLength="150"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            required
                        ></input>
                    </div>

                    <div class="col-md-12">
                        <label for="Resumo_Mensagem" class="form-label">
                            <h6 style={{ color: "#2771c1" }}>
                                descricao
                            </h6>
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Espaço Obrigatório"
                            maxLength="150"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            required
                        ></input>
                    </div>

                    <div class="col-md-12">
                        <label for="Mensagem" class="form-label">
                            <h6 style={{ color: "#2771c1" }}>
                                Preço
                            </h6>
                        </label>
                        <textarea
                            type="text"
                            class="form-control"
                            placeholder="Espaço Obrigatório"
                            maxLength="500"
                            rows="5"
                            value={preço}
                            onChange={(e) => setPreço(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <div class="col-md-12">
                        <label for="primeira_imagem" class="form-label">
                            <h6 style={{ color: "#2771c1" }}>Link da Imagem:</h6>
                        </label>
                        <textarea
                            type="text"
                            class="form-control"
                            name="linkDaImagem"
                            maxLength="500"
                            row="5"
                            value={imagem}
                            onChange={(e) => setImagem(e.target.value)}
                            placeholder="Link:"
                        ></textarea>
                    </div>

                    <div class="col-md-12">
                        <label for="Link_de_Redirecionamento" class="form-label">
                            <h6 style={{ color: "#2771c1" }}>
                                categoria
                            </h6>
                        </label>
                        <textarea
                            type="text"
                            class="form-control"
                            maxLength="500"
                            row="5"
                            value={categoria}
                            onChange={(e) =>
                                setCategoria(e.target.value)
                            }
                            placeholder="Link:"
                        ></textarea>
                    </div>
                    <div
                        class="col-md-12"
                        style={{
                            textAlign: "center",
                            padding: 16,
                            marginBottom: 10,
                        }}
                    >
                        <button
                            type="submit"
                            class="btn btn-primary"
                            onClick={salvarProduto}
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
