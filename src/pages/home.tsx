import { useGetAllCharacters } from "@/api/character/hooks";
import { DataTable } from "@/components/data-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { ColumnDef } from "@tanstack/react-table";

interface Character {
  name: string;
  image: string;
}
export function Home() {
  const { data, isLoading } = useGetAllCharacters({ page: 0 })

  const columns: ColumnDef<Character>[] = [
    {
      accessorKey: "name",
      header: "Usuário",
      enableSorting: true,
      cell: ({ row }) => {
        console.log(row)
        const payroll = row.original;
        return (
          <div className="flex items-center gap-2.5">
            <Avatar className="size-6">
              {payroll.image ? (
                <AvatarImage
                  src={payroll.image}
                  alt={payroll.name}
                />
              ) : null}
              <AvatarFallback className="text-xs bg-muted">
                {payroll.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{payroll.name}</span>
          </div>
        );
      },

    },
    {
      accessorKey: "origin",
      header: "Cidade",
      enableSorting: false,
      cell: ({ row }) => (
        <span className="text-sm">
          {row.getValue("origin")}
        </span>
      ),
    },
    {
      accessorKey: "episodes",
      header: "Episódios",
      cell: ({ row }) => (
        <span className="text-sm">
          {row.getValue("episodes")}
        </span>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <span className="text-sm">
          {row.getValue("status")}
        </span>
      ),
    }
  ];

  console.log(data)
  return (
    <>
      <DataTable
        data={(data?.results || []).map(item => {
          return {
            name: item.name,
            image: item.image,
            origin: item.origin.name,
            episodes: item.episode.length,
            status: item.status
          }
        })}
        query="name"
        columns={columns}
        isLoading={isLoading}
        searchInputPlaceholder="Pesquisar"
      />
    </>
  );
}