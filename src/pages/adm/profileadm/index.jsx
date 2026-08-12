import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import {
  Page,
  Container,
  BackButton,
  ProfileBox,
  AvatarWrapper,
  Avatar,
  EditButton,
  UserName,
  UserEmail,
  Field,
  Label,
  Input,
  PasswordBox,
  LogoutLink,

  ModalOverlay,
  Modal,
  ModalButtons,
  CancelButton,
  ConfirmButton,

} from "./style";


export default function Profile() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [showLogoutModal, setShowLogoutModal] = useState(false);


  const [user, setUser] = useState({
    name: "Administrador",
    email: "admetecamp00@email.com",
    password: "12345678",
    photo: "/perfil.png",
  });



  const handlePhotoChange = (e) => {

    const file = e.target.files[0];

    if(file){

      const url = URL.createObjectURL(file);

      setUser({
        ...user,
        photo:url,
      });

    }

  };



  return (

    <Page>


      <BackButton to="/adm/inscricaoadm">

        <FaArrowLeft />

      </BackButton>



      <Container>


        <ProfileBox>

          <AvatarWrapper>

            <Avatar 
              src={user.photo}
              alt="Foto de perfil"
            />


            <EditButton>

              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
              />

              Editar

            </EditButton>


          </AvatarWrapper>


        </ProfileBox>





        <UserName>
          {user.name}
        </UserName>


        <UserEmail>
          {user.email}
        </UserEmail>






        <Field>

          <Label>
            Nome
          </Label>


          <Input

            type="text"

            value={user.name}

            onChange={(e)=>

              setUser({

                ...user,

                name:e.target.value

              })

            }

          />


        </Field>






        <Field>

          <Label>
            Email
          </Label>


          <Input

            type="email"

            value={user.email}

            onChange={(e)=>

              setUser({

                ...user,

                email:e.target.value

              })

            }

          />


        </Field>






        <Field>


          <Label>
            Senha
          </Label>



          <PasswordBox>


            <Input

              type={
                showPassword 
                ? "text" 
                : "password"
              }

              value={user.password}


              onChange={(e)=>

                setUser({

                  ...user,

                  password:e.target.value

                })

              }


            />



            <span
              onClick={()=>
                setShowPassword(!showPassword)
              }
            >

              {
                showPassword
                ?
                <FaEyeSlash size={18}/>
                :
                <FaEye size={18}/>
              }


            </span>


          </PasswordBox>


        </Field>





        <LogoutLink
          onClick={() =>
            setShowLogoutModal(true)
          }
        >

          Sair da conta

        </LogoutLink>







        {
          showLogoutModal && (

            <ModalOverlay>


              <Modal>


                <h3>
                  Sair da conta
                </h3>



                <p>
                  Tem certeza que deseja sair da sua conta?
                </p>




                <ModalButtons>


                  <CancelButton

                    onClick={() =>
                      setShowLogoutModal(false)
                    }

                  >

                    Cancelar

                  </CancelButton>





                  <ConfirmButton

                    onClick={() =>
                      navigate("/login")
                    }

                  >

                    Sim, sair

                  </ConfirmButton>



                </ModalButtons>


              </Modal>


            </ModalOverlay>

          )
        }





      </Container>


    </Page>

  );

}