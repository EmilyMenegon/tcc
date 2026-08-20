import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaPen, FaBook, } from "react-icons/fa";

import {
    Container,
    Header,
    LogoText,
    Title,
    Search,
    Tabs,
    Tab,
    Content,
} from "./style";

import Poetas from "./Poetas";
import Notas from "./Notas";

export default function Mat() {

    const location = useLocation();

    const [aba, setAba] = useState(
        location.state?.aba || "poetas"
    );

    const [search, setSearch] = useState("");

    return (

        <Container>

            <Header>

           

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
                            onChange={(e) => setSearch(e.target.value)}
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