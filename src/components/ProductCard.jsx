import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import solarPanel from "../images/solarPanel.png";
import doubleSolarPanel from "../images/doubleSolarPanel1.png";
import singlePanel from "../images/singlePanel1.png";
import solarPanelWithPoll from "../images/solarPanelWithPoll1.png";

const products = [
  {
    img: solarPanel,
    capacity: "105W/12V",
    name: "Polycrystalline Solar Panels",
    price: "8,800",
    inStock: "7",
  },
  {
    img: doubleSolarPanel,
    capacity: "105W/12V",
    name: "Polycrystalline Solar Panels",
    price: "8,800",
    inStock: "4",
  },
  {
    img: solarPanelWithPoll,
    capacity: "105W/12V",
    name: "Polycrystalline Solar Panels",
    price: "8,800",
    inStock: "4",
  },
  {
    img: singlePanel,
    capacity: "105W/12V",
    name: "Polycrystalline Solar Panels",
    price: "8,800",
    inStock: "4",
  },
];

export default function ProductCard() {
  return (
    <>
      {products.map((product, index) => (
        <Card key={index} sx={{ width: 280, maxWidth: "100%", boxShadow: "lg" }}>
          <CardOverflow>
            <AspectRatio sx={{ minWidth: 200 }}>
              <img src={product.img} loading="lazy" alt="" />
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            <Typography level="body-xs">{product.capacity}</Typography>
            <Link
              href="#product-card"
              fontWeight="md"
              color="neutral"
              textColor="text.primary"
              overlay
              endDecorator={<ArrowOutwardIcon />}
            >
              {product.name}
            </Link>

            <Typography
              level="title-lg"
              sx={{ mt: 1, fontWeight: "xl" }}
              endDecorator={
                <Chip component="span" size="sm" variant="soft" color="success">
                  Lowest price
                </Chip>
              }
            >
              {product.price} INR
            </Typography>
            <Typography level="body-sm">
              (Only <b>{product.inStock}</b> left in stock!)
            </Typography>
          </CardContent>
          <CardOverflow>
            <Button variant="solid" color="success" size="lg">
              Add to cart
            </Button>
          </CardOverflow>
        </Card>
      ))}
    </>
  );
}
