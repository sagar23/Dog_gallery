import { HttpClient } from "@angular/common/http";
import { Injectable, Type } from "@angular/core";
import { Observable, Observer, firstValueFrom } from "rxjs";

interface Message {
    [key: string]: unknown[];
}

type DogBreed = {
    message: Message,
    status: string
}

@Injectable({
    providedIn: 'root'
})
export class DogService {

    constructor(private httpService: HttpClient) {
    }

    getAllDogBreeds(): Observable<DogBreed> {
        return this.httpService.get("https://dog.ceo/api/breeds/list/all") as Observable<DogBreed>;
    }

    async createObservablesForImg(breeds: string[]) {
        const promises = breeds.map(breed => `https://dog.ceo/api/breed/${breed}/images/random`);
        return promises;
    }
} 