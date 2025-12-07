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
    // {
    //   id: "select",
    //   header: ({ table }) => (
    //     <Checkbox
    //       checked={
    //         table.getIsAllPageRowsSelected() ||
    //         (table.getIsSomePageRowsSelected() && "indeterminate")
    //       }
    //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //       aria-label="Select all"
    //     />
    //   ),
    //   cell: ({ row }) => (
    //     <Checkbox
    //       checked={row.getIsSelected()}
    //       onCheckedChange={(value) => row.toggleSelected(!!value)}
    //       aria-label="Select row"
    //     />
    //   ),
    //   enableSorting: false,
    //   enableHiding: false,
    // },
    // {
    //   accessorKey: "payrollId",
    //   header: "Payroll ID",
    //   cell: ({ row }) => (
    //     <span className="text-sm font-medium text-muted-foreground">
    //       {row.getValue("payrollId")}
    //     </span>
    //   ),
    // },
    // {
    //   accessorKey: "totalAmount",
    //   header: "Total Amount",
    //   cell: ({ row }) => {
    //     const amount = row.getValue("totalAmount") as number;
    //     return (
    //       <div className="flex items-center gap-1.5">
    //         <span className="text-muted-foreground">$</span>
    //         <span className="text-sm font-medium text-muted-foreground">
    //           {amount.toLocaleString()}
    //         </span>
    //       </div>
    //     );
    //   },
    // },
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
    // {
    //   accessorKey: "payPeriod",
    //   header: "Pay Period",
    //   cell: ({ row }) => (
    //     <span className="text-sm text-muted-foreground">
    //       {row.getValue("payPeriod")}
    //     </span>
    //   ),
    // },
    // {
    //   accessorKey: "paymentMethod",
    //   header: "Payment Method",
    //   cell: ({ row }) => (
    //     <span className="inline-flex px-2 py-0.5 text-xs font-medium bg-muted rounded text-muted-foreground">
    //       {row.getValue("paymentMethod")}
    //     </span>
    //   ),
    // },
    // {
    //   accessorKey: "processedDate",
    //   header: "Processed Date",
    //   cell: ({ row }) => (
    //     <span className="text-sm text-muted-foreground">
    //       {row.getValue("processedDate") || "-"}
    //     </span>
    //   ),
    // },
    // {
    //   accessorKey: "status",
    //   header: "Status",
    //   filterFn: (row, id, value) => {
    //     const status = row.getValue(id) as PayrollStatus;
    //     return value.includes(status);
    //   },
    //   cell: ({ row }) => {
    //     const status = row.getValue("status") as PayrollStatus;
    //     const config = statusConfig[status];
    //     const Icon = config.icon;
    //     return (
    //       <div
    //         className={cn(
    //           "inline-flex items-center gap-1 px-1.5 py-0.5 rounded border text-xs font-medium",
    //           config.bgClass
    //         )}
    //       >
    //         <Icon className={cn("size-3.5", config.className)} />
    //         <span className={config.className}>{config.label}</span>
    //       </div>
    //     );
    //   },
    // },
    // {
    //   id: "actions",
    //   enableHiding: false,
    //   cell: ({ row }) => {
    //     const payroll = row.original;
    //     return (
    //       <DropdownMenu>
    //         <DropdownMenuTrigger asChild>
    //           <Button variant="ghost" className="h-8 w-8 p-0">
    //             <span className="sr-only">Open menu</span>
    //             <MoreHorizontal className="h-4 w-4" />
    //           </Button>
    //         </DropdownMenuTrigger>
    //         <DropdownMenuContent align="end">
    //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
    //           <DropdownMenuItem
    //             onClick={() => navigator.clipboard.writeText(payroll.payrollId)}
    //           >
    //             Copy Payroll ID
    //           </DropdownMenuItem>
    //           <DropdownMenuSeparator />
    //           <DropdownMenuItem>View Details</DropdownMenuItem>
    //           <DropdownMenuItem>Download Slip</DropdownMenuItem>
    //           <DropdownMenuItem>Edit Payroll</DropdownMenuItem>
    //         </DropdownMenuContent>
    //       </DropdownMenu>
    //     );
    //   },
    // },
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