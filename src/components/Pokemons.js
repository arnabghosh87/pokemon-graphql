import React from "react";
import "./Pokemons.scss";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export function Pokemons(props) {
    const suggestions = props.data.resistant.map((row, index) => {
        if (index === props.data.resistant.length - 1) return row + " resistant";
        else return row + ",";
    });
    return (

        <Card sx={{ maxWidth: 345, height: 600 }} className="card">
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "red", height: 50 }} aria-label="recipe">
                        {props.index + 1}
                    </Avatar>
                }
                title={props.data.name}
                titleTypographyProps={{ variant: 'h5' }}
                subheader={suggestions}
            />
            <CardMedia
                component="img"
                image={props.data.image}
                alt={props.data.name}
                className="cardImage"
            />
            <CardContent height={150}>
                <Typography>
                    Special Attack
                </Typography>
                <Typography variant="body2" className="textColor">
                    {props.data &&
                        props.data.attacks &&
                        props.data.attacks.special.map((attack) => (
                            <span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
                        ))}
                </Typography>
                <Typography>
                    Fast Attack
                </Typography>
                <Typography variant="body2" className="textColor">
                    {props.data &&
                        props.data.attacks &&
                        props.data.attacks.fast.map((attack) => (
                            <span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
                        ))}
                </Typography>
            </CardContent>
        </Card>
    );
}
