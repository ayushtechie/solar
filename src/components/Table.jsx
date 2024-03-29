import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Company Name", "Area", "Distributor/Wholesaler", ];
 
const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Lucknow",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Lucknow",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Lucknow",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Varanasi",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Varanasi",
    date: "04/10/21",
  },
];
 
export function Table() {
  return (
    <Card className="h-full w-full overflow-auto">
      <table className="w-full min-w-max table-auto">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-green-700 p-4">
                <Typography
                  variant="small"
                  color="white"
                  className="font-semibold leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }, index) => (
            <tr key={name} className="even:bg-blue-gray-50/50">
              <td className="p-4 text-center">
                <Typography variant="small" color="blue-gray" className="font-normal blur-sm">
                  {name}
                </Typography>
              </td>
              <td className="p-4 text-center">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {job}
                </Typography>
              </td>
              <td className="p-4 text-center">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {date}
                </Typography>
              </td>
              {/* <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  Edit
                </Typography>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}