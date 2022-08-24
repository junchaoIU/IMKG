package com.openData.dao.entity;

import java.util.List;
import java.util.Map;

public class OneWord {
    private String id;
    private String shelfMark;
    private String work;
    private String scriptForm;
    private String charactor;
    private String image;
    private Map contribution;
    private String posInTextposInText;

    @Override
    public String toString() {
        return "StoneOneWord{" +
                "id='" + id + '\'' +
                ", shelfMark='" + shelfMark + '\'' +
                ", work='" + work + '\'' +
                ", scriptForm='" + scriptForm + '\'' +
                ", charactor='" + charactor + '\'' +
                ", image='" + image + '\'' +
                ", contribution=" + contribution +
                ", posInTextposInText='" + posInTextposInText + '\'' +
                '}';
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setShelfMark(String shelfMark) {
        this.shelfMark = shelfMark;
    }


    public void setWork(String work) {
        this.work = work;
    }

    public void setScriptForm(String scriptForm) {
        this.scriptForm = scriptForm;
    }

    public void setCharactor(String charactor) {
        this.charactor = charactor;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setContribution(Map contribution) {
        this.contribution = contribution;
    }

    public void setPosInTextposInText(String posInTextposInText) {
        this.posInTextposInText = posInTextposInText;
    }

    public String getId() {
        return id;
    }

    public String getShelfMark() {
        return shelfMark;
    }


    public String getWork() {
        return work;
    }

    public String getScriptForm() {
        return scriptForm;
    }

    public String getCharactor() {
        return charactor;
    }

    public String getImage() {
        return image;
    }

    public Map getContribution() {
        return contribution;
    }

    public String getPosInTextposInText() {
        return posInTextposInText;
    }
}
