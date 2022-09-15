package com.openData.dao.entity;

import java.util.List;
import java.util.Map;

public class OneWord {
    private String id;

    private String title;
    private String shelfMark;
    private String work;
    private String scriptForm;
    private String charactor;
    private String image;
    private Map contribution;
    private String posInTextposInText;

    @Override
    public String toString() {
        return "OneWord{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", shelfMark='" + shelfMark + '\'' +
                ", work='" + work + '\'' +
                ", scriptForm='" + scriptForm + '\'' +
                ", charactor='" + charactor + '\'' +
                ", image='" + image + '\'' +
                ", contribution=" + contribution +
                ", posInTextposInText='" + posInTextposInText + '\'' +
                '}';
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getShelfMark() {
        return shelfMark;
    }

    public void setShelfMark(String shelfMark) {
        this.shelfMark = shelfMark;
    }

    public String getWork() {
        return work;
    }

    public void setWork(String work) {
        this.work = work;
    }

    public String getScriptForm() {
        return scriptForm;
    }

    public void setScriptForm(String scriptForm) {
        this.scriptForm = scriptForm;
    }

    public String getCharactor() {
        return charactor;
    }

    public void setCharactor(String charactor) {
        this.charactor = charactor;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Map getContribution() {
        return contribution;
    }

    public void setContribution(Map contribution) {
        this.contribution = contribution;
    }

    public String getPosInTextposInText() {
        return posInTextposInText;
    }

    public void setPosInTextposInText(String posInTextposInText) {
        this.posInTextposInText = posInTextposInText;
    }
}
