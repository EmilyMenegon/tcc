import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaPen, FaBook, FaHome } from "react-icons/fa";

import {
    Container,
    Header,
    LogoText,
    Title,
    Search,
    Tabs,
    Tab,
    Content,
    BackButton,
} from "./style";

import Poetas from "./Poetas";
import Notas from "./Notas";

export default function Mat() {

    const location = useLocation();

    const navigate = useNavigate();

    const [aba, setAba] = useState(
        location.state?.aba || "poetas"
    );

    const [search, setSearch] = useState("");

    return (

        <Container>

            <Header>

                {/* ==================================================
                    BOTÃO PARA VOLTAR AO LOGIN
                ================================================== */}

                <BackButton
                    onClick={() => navigate("/login")}
                    aria-label="Voltar para a página de login"
                    title="Voltar para o login"
                >

                    <FaHome />

                </BackButton>


                <LogoText>

                    <Title>

                        {aba === "poetas"
                            ? "Poetas"
                            : "Notas"}

                    </Title>


                    {aba === "poetas" && (

                        <Search
                            type="text"
                            placeholder="Buscar por nome..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                        />

                    )}

                </LogoText>

            </Header>


            <Tabs>

                <Tab
                    active={aba === "poetas"}
                    onClick={() => setAba("poetas")}
                >

                    <FaPen /> Poetas

                </Tab>


                <Tab
                    active={aba === "notas"}
                    onClick={() => setAba("notas")}
                >

                    <FaBook /> Notas

                </Tab>

            </Tabs>


            <Content>

                {aba === "poetas" ? (

                    <Poetas
                        search={search}
                    />

                ) : (

                    <Notas />

                )}

            </Content>

        </Container>

    );

}