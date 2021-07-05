# Inicializando o Postgres

`docker run -d --rm --name postgres-container -p 5432:5432 -v $(pwd)\data:/var/lib/postgresql -e POSTGRES_PASSWORD=postgres postgres`
`docker run -d --rm --name postgres-container -p 5432:5432 -e POSTGRES_PASSWORD=postgres postgres --mount 'type=volume,source=$(pwd)/data,target=/var/lib/postgresql/data'`
