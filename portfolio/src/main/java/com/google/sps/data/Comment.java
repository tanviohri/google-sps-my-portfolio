package com.google.sps.data;

public final class Comment {

  private final String commentText;
  private final long timestamp;

  public Comment(String commentText, long timestamp) {
    this.commentText = commentText;
    this.timestamp = timestamp;
  }
}