import styled from "styled-components"

export const Container = styled.div`

h1{
  text-align: center;
  margin: 4rem 0;
}

`

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
  width: 200px;
  border-radius: 0.313rem;
  margin-bottom: 1rem;
}

span {
  font-weight: bold;
  font-size: 120%;
}

a {
  transition: all 0.3s;
}

a:hover {
  transform: scale(1.1);
}
`